/*
  ############# 문제 #############

  김멋사는 대학 식권 구입 프로그램을 만드려고 한다.
  김멋사의 대학교는 특이하게도 구성원별 부가세 부여 금액이 다르다.
  교수님의 경우 500원 , 직원의 경우 300원, 학생은 100원의 음식에 대한 부가세가 포함된다.

  메뉴 정보는 다음과 같다.
  FOODS_PRICE = {
    돈까스: '7000',
    제육: '5000',
    비빔밥: '4000',
  };

  대학 구성원의 정보 예시는 다음과 같다.
  // 이름이 '김멋사' 이고 학생일 때
  김멋사 = {
    name: '김멋사',
    type: 'student',
  }

  // 이름이 '배교수' 이고 교수일 때
  배교수 = {
    name: '배교수',
    type: 'professor',
  }

  peopleType = [
    'student',
    'professor',
    'employee',
  ]

  ############# 목표 #############

  메뉴 정보와 구성원 정보를 정보로 줄 때 식권 금액을 출력하는 함수를 만들어야한다.
  학생이 5학년 이상인 경우는 없다.
  만약 구성원 타입이 PEOPLE_TYPE과 맞지 않는다면 '찾았다 요놈!'을 출력해야한다.
  만약 음식이 FOODS_PRICE에 없다면 '그런거 안팔아요'를 출력해야한다.

  ############# 힌트 #############

  반복문, 함수, 조건문을 활용하세요. 다른 방법을 써도 됩니다.
  FOODS_PRICE의 데이터 타입에 유의하세요
*/

// FOODS_PRICE, PEOPLE_TYPE, PEOPLE_INFOS은 수정하면 안됩니다.
const FOODS_PRICE = { // [key: value]
  돈까스: '7000', // not number, it is string
  제육: '5000',
  비빔밥: '4000',
};
const PEOPLE_TYPE = ['student', 'professor', 'employee'];
const PEOPLE_INFOS = [
  {
    name: '김멋사',
    type: 'student',
    food: '돈까스',
  },
  {
    name: '배교수',
    type: 'professor',
    food: '제육',
  },
  {
    name: '임직원',
    type: 'employee',
    food: '비빔밥',
  },
  {
    name: '나스파이',
    type: 'spy',
    food: '비빔밥',
  },
  {
    name: '대학원생',
    type: 'student',
    food: '짬뽕',
  },
];

// 식권 종이를 출력합니다. 식권 종이에는 이름과 금액이 있어야합니다.
const getTicket = (peopleName, type, food) => {
  if(Object.keys(FOODS_PRICE).includes(food)) { // FOODS_PRICE의 key 값이 food에 있다면
    var price = +FOODS_PRICE[food]; // price 변수에 저장. (string->number로 변환) if문 탈출해도 price 써야하니 var로 선언...
  } else {
    return '그런 거 안 팔아요';
  }

  if(PEOPLE_TYPE.includes(type)) { // type이 교수, 직원, 학생이라면.. (확인)
    if(type == 'professor') 
      price += 500;
    else if(type == 'employee') 
      price += 300;
    else if(type == 'student') 
      price += 100;
  } else {
    return '잡았다 요놈!';
  }

  return { [peopleName]: price }; 
  // return `${peopleName}: ${price}`; //중괄호 없이 출력하려면 이렇게 백틱으로 묶어서...! 
};

// 식권 지불 금액을 계산하는 함수를 완성하세요
const getTickets = (ticketInfos) => {
    var tickets = []; // 식권 금액을 저장할 배열
    for(let i=0; i<ticketInfos.length; i++) { // ticketInfos 각각 
      tickets.push(getTicket(ticketInfos[i].name, ticketInfos[i].type, ticketInfos[i].food)); // getTicket 함수로 이름, 가격 정보를 저장함 
    }
    return tickets;
};
/*
  예상 출력
  ['김멋사: 7100', '배교수: 5500', '임직원: 4300', '찾았다 요놈!', '그런거 안팔아요']
*/
console.log(getTickets(PEOPLE_INFOS));
