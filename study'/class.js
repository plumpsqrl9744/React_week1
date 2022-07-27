class Cat {
	// 생성자 함수
  constructor(name) {
		// 여기서 this는 이 클래스입니다.
		this.name = name; 
	}

	// 함수
	showName(){
		console.log(this.name);
	}
}

// 여기서 new는 키워드예요. 새로운 무언가를 만들기 위해서 생성자 함수와 함께 씁니다.
// 네, new와 생성자 함수는 세트예요 :) (소근 
let cat = new Cat('perl');
cat.showName();
console.log(cat);

let cat2 = new Cat("two");

class MyCat extends Cat {
	// 생성자 함수
  constructor(name, age) {
		// super를 메서드로 사용하기
		super(name); 
		this.age = age; 
	}
	
	// 부모 클래스가 가진 것과 같은 이름의 함수를 만들 수 있습니다.
	// 오버라이딩한다고 해요.
	showName(){
		console.log(this.name);
		// super를 키워드로 사용하기
		return '내 고양이 이름은 '+super.showName()+'입니다.';
	}
	
	showAge(){
		console.log('내 고양이는 '+this.age+'살 입니다!');
	}
}

let my_cat = new MyCat('perl', 4);
my_cat.showName();
my_cat.showAge();