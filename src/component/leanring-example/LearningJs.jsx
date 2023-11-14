const person = {
  name: "suwan",
  age: 30,
  girlFriend: {
    first: {
      job: "idol",
      group: "aespa",
      name: "karina",
    },
  },
  sns: ["intagram", "facebook", "saramin"],
  print: () => {
    person.sns.map((sns) => console.log(sns));
  },
};

const LearningJs = () => {
  return (
    <div>
      {person.name} 입니다. 나이는 {person.age} 이구요, 잘부탁드립니다.
      <div>
        아참, 제 여자친구를 소개할께요, 이름은 {person.girlFriend.first.name}{" "}
        입니다. 직업은 {person.girlFriend.first.job} 이구요,{" "}
      </div>
      <p>그리고 지금 일자리 구하고 있어요</p>
      <p>제 sns 구경오세요</p>
      <p>{person.sns[0]}</p>
      <div>{person.print()}</div>
      {test()}
    </div>
  );
};

const test = () => {
  console.log("이게 되나?");
};
export default LearningJs;
