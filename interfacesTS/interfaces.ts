interface Rect {
  readonly id: string; //только для чтения
  color?: string; //?- необязательные параметры
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    height: 5,
  },
};
rect2.color = "black";

//приведение к типу
const rect3 = {} as Rect;
const rect4 = <Rect>{}; ///старая запись

//наследование интерфейсов
//название интрфейса IНазвание
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

////class
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

//обьект с большим кол-ом динамичексих ключей
// css стили=string
// значения=string
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
