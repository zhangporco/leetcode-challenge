const test = require('ava');

test('test 1', t => {
	
	function A() {
		this.a = '1';
	}
	function B() {
		this.b = '2';
	}
	A.prototype.b = new B();
	const a = new A();
	
	console.log(a.b);
	for (const i in a) {
		console.log(i);
	}
	t.pass();
});