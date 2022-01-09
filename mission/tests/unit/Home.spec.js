import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  const wrapper = shallowMount(Home, {
    data() {
      return {
        inputText: "ABLY Externship",
        isModalShown: false,
        clicks: 0,
      };
    },
  });

  afterEach(() => {
    wrapper.vm.inputText = "ABLY Externship";
    wrapper.vm.clicks = 0;
  });

  it("Input에 값을 입력하면, Input에 입력한 값이 그 아래에 똑같이 표시된다.", () => {
    const inputText = wrapper.find("#input");
    const outputText = wrapper.find("#output");
    expect(inputText.element.value).toBe(outputText.element.textContent);
  });

  it("'제출'을 1회 누르면, Input에 입력한 값과 아래에 표시된 문자열이 왼쪽으로 1칸씩 회전한다.", () => {
    const rotateButton = wrapper.find("#rotate");
    rotateButton.trigger("click");
    expect(wrapper.vm.inputText).toBe("BLY ExternshipA");
  });

  it("'알림'을 누를 때마다 Input에 입력한 값과 '알림' 버튼을 클릭한 횟수가 알림창에 표시된다.", () => {
    const rotateButton = wrapper.find("#rotate");
    rotateButton.trigger("click");
    rotateButton.trigger("click");
    expect(wrapper.vm.inputText).toBe("LY ExternshipAB");

    const modalButton = wrapper.find("#modal");
    modalButton.trigger("click");
    modalButton.trigger("click");
    modalButton.trigger("click");
    expect(wrapper.vm.isModalShown).toBeTruthy();
    expect(wrapper.vm.clicks).toBe(3);
  });
});
