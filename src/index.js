import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 우리가 component를 사용하고자 할 때의 형태. 
// react application은 한 번에 하나의 컴포넌트만 렌더링해주기 때문에 여러개 받을 수 없음.
// 따라서, 최소한 모든 component는 App에 import 시켜야한다. 
ReactDOM.render(<App />, document.getElementById('root'));
