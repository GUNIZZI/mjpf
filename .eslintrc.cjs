module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['src'],
                moduleDirectory: ['node_modules', 'src'],
            },
            alias: {
                map: [
                    ['@', './src'], // @ 별칭을 src 폴더로 매핑
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    extends: [
        'airbnb',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'jsx-a11y', 'react-hooks', 'react-refresh', 'import'],
    rules: {
        // key에 index사용가능 하도록 수정
        'react/no-array-index-key': 'off',
        // 사용되지 않는 prop type에 대한 경고
        'react/no-unused-prop-types': 'warn',
        // 선택적 props에 대해 defaultProps의 요구
        'react/require-default-props': 'off',
        // 속성이 없을 때 나는 에러에서 제외할 속성 설정
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        // 화살표 함수 {} 사용 - off로 사용하지 않음
        'arrow-body-style': 'off',
        // JSX 확장자만 허용
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // React import 필수 여부 - off로 import 하지 않아도 됨
        'react/react-in-jsx-scope': 'off',
        // 컴포넌트/상수 외 export 경고(jsx에 한함)
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        // 함수 컴포넌트 정의 방식 - 모두 화살표 함수로 강제
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function', // 명명된 컴포넌트를 화살표 함수로 강제
                unnamedComponents: 'arrow-function', // 이름 없는 컴포넌트를 화살표 함수로 강제
            },
        ],
        // export가 하나만 있을때 default를 사용해야 하는 규칙 - off로 사용하지 않음
        'import/prefer-default-export': 'off',
        // package에 명시되지 않은 외부 모듈의 import 금지 - 단, 개발 의존성의 import는 허용
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // import 문의 순서를 강제
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index'],
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '{.,..}/**/*',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '@mui/**',
                        group: 'type',
                        position: 'after',
                    },
                    {
                        pattern: '**/*.+(css|scss|sass|less)',
                        group: 'type',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        // import 문에서 확장자 제한 - js, jsx, tx, tsx 확장자에 대해 강제로 제한
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // HTML요소에 대한 propspreading은 금지, 커스텀 컴포넌트 대해서는 허용 {...props}
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'enforce',
                custom: 'ignore',
            },
        ],
    },
};
