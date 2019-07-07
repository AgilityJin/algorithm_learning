import array from "@/methods/array";
import mock from '@/mock';

const $result = document.querySelector('#result');
const $test = document.querySelector('#test');

class Vm {
  constructor() {
    this.init();
  }

  init() {
    this.eventsBind()
  }
  eventsBind() {
    $test!.addEventListener('click', ()=> {
      this.getResult();
    })
  }
  getResult() {
    const ranStr = mock.randomString(132);
    const runResult = JSON.stringify(array.mostString(ranStr));
    $result!.innerHTML = runResult;
  }
}

new Vm();
