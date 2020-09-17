import {getElementById, getElement, calculatePositions} from './util.js'

const backdropHTML = `<div id="tooltip-helper-backdrop" class="tooltip-helper-backdrop"></div>`;
const footerHTML = `<div class="tooltip-helper-footer"><button id="tooltip-helper-end-sequence" class="tooltip-helper-end-sequence">Quit</button><div><button id="tooltip-helper-prev-sequence" class="tooltip-helper-prev-sequence">Previous</button><button id="tooltip-helper-next-sequence" class="tooltip-helper-next-sequence ml-2">Next</button></div></div>`;
let sequenceIndex = 0;
let tooltipData = {
  welcomeText: "Do you want to take the tour of the page?",
  confirmText: "Yes",
  cancelText: "No",
  backdropColor: "#1b1b1b8e",
  sequence: [],
  onComplete: function() {}
};
const createDescriptionElement = (backdrop, description) => {
  const { sequence } = tooltipData;
  let descriptionElement = getElement("#tooltip-helper-backdrop .tooltip-helper-active-description");
  if (!descriptionElement) {
    descriptionElement = document.createElement("div");
    descriptionElement.style.willChange = "transform";
    descriptionElement.classList.add("tooltip-helper-active-description");
    descriptionElement.innerHTML += "<p id='tooltip-helper-active-description-text'></p>";
    descriptionElement.innerHTML += footerHTML;
    backdrop.append(descriptionElement);
  }
  const prevBtn = getElementById("tooltip-helper-prev-sequence");
  const nextBtn = getElementById("tooltip-helper-next-sequence");
  if (sequenceIndex === 0) {
    prevBtn.setAttribute('disabled', true);
    prevBtn.classList.add("tooltip-disabled-btn");
    if (sequence.length === 1) {
      nextBtn.innerText = "Finish";
    } else {
      nextBtn.innerText = "Next";
    }
  } else {
    prevBtn.removeAttribute('disabled', true);
    prevBtn.classList.remove("tooltip-disabled-btn");
    if (sequenceIndex === sequence.length - 1) {
      nextBtn.innerText = "Finish";
    } else {
      nextBtn.innerText = "Next";
    }
  }
  getElementById("tooltip-helper-active-description-text").innerHTML = description;
  return descriptionElement;
};

const createStage = () => {
  const { sequence } = tooltipData;
  const currentSequence = sequence[sequenceIndex];
  const { element, description } = currentSequence;
  const backdrop = getElementById("tooltip-helper-backdrop");
  let position = { x: 0, y: 0 };
  let placement = currentSequence.hasOwnProperty('placement') ? currentSequence.placement : 'bottom';
  if (window.innerWidth <= 400 && (placement === 'left' || placement === 'right')) placement = 'bottom';
  let block = 'center';

  const elem = getElement(element);
  if (!elem) return endSequence();
  getElement('body').classList.add('stop-scroll');
  elem.scrollIntoView({ behaviour: 'smooth', block });
  let elemBoundaries = elem.getBoundingClientRect();

  let descriptionElement = createDescriptionElement(backdrop, description);

  position = calculatePositions(elem, descriptionElement, placement);

  let desc = descriptionElement.getBoundingClientRect();
  if (position.x + desc.width >= window.innerWidth) {
    position.x = Math.round(elemBoundaries.right - desc.width + 15);
  } else if (position.x <= 0) {
    position.x = Math.round(elemBoundaries.x - 15);
    if (desc.width >= window.innerWidth) {
      descriptionElement.style.width = (window.innerWidth - (position.x * 2)) + "px";
    }
  }
  descriptionElement.style.transform = "translate3d(" + position.x + "px, " + position.y + "px, 0px)";
  if (sequence.hasOwnProperty('events') && sequence.events.hasOwnProperty('on')) { sequence.events.on(sequence) };
};
const endSequence = () => {
  getElement('body').classList.remove('stop-scroll');
  const element = getElementById("tooltip-helper-backdrop");
  element.removeEventListener('click', function() {})
  element.style.background = "transparent";
  element.parentNode.removeChild(element);
  sequenceIndex = 0;
  return tooltipData.onComplete()
};
const toggleSequence = (increment) => {
  const { sequence } = tooltipData;
  sequenceIndex = sequenceIndex + increment;
  if (sequenceIndex >= 0 && sequenceIndex <= sequence.length - 1) {
    return createStage(sequence[sequenceIndex], sequence);
  } else {
    getElement(sequence[sequenceIndex - (Number(increment))].element).classList.remove("tooltip-helper-active-element");
    getElementById("tooltip-helper-backdrop").removeEventListener("click", function(e) {});
    endSequence();
    return;
  }
};
const setupListeners = () => {
  getElementById("tooltip-helper-backdrop").addEventListener("click", (e) => {
    switch(e.target.id) {
      case 'tooltip-helper-next-sequence': return toggleSequence(1);
      case 'tooltip-helper-prev-sequence': return toggleSequence(-1);
      case 'tooltip-helper-end-sequence':
      case 'tooltip-helper-active':
      case 'tooltip-helper-backdrop': return endSequence();
      default: return;
    }
  });
};
const createSequence = (data) => {
  tooltipData = { ...tooltipData, ...data };
  getElement("body").innerHTML += backdropHTML;
  setupListeners();
  createStage();
};
export default createSequence;
