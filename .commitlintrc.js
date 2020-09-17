module.exports = {
	extends: ['@commitlint/config-conventional'],
	// rules 中的内容可自定义，当前与 @commitlint/config-conventional 一致
	// 用于查看可自定义项
	rules: {
		// body 以空行开头
		'body-leading-blank': [1, 'always'],
		// footer 以空行开头
		'footer-leading-blank': [1, 'always'],
		// header 最大长度 72 个字符
		'header-max-length': [2, 'always', 72],
		// 提交影响范围
		'scope-case': [1, 'always', 'lower-case'],
		// 提交内容
		'subject-case': [2, 'always', 'lower-case'],
		// 提交内容不能为空
		'subject-empty': [2, 'never'],
		// 提交内容不能以 . 结尾
		'subject-full-stop': [2, 'never', '.'],
		// 提交类型案例
		'type-case': [2, 'always', 'lower-case'],
		// 提交类型不能为空
		'type-empty': [2, 'never'],
		// 支持的提交类型
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		]
	}
}