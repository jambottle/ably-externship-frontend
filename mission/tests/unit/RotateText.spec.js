import { shallowMount } from '@vue/test-utils';
import RotateText from '@/components/RotateText.vue';

describe('RotateText.vue', () => {
  const wrapper = shallowMount(RotateText);

  it('Input에 값을 입력하면, Input에 입력한 값이 그 아래에 똑같이 표시된다.', () => {
    const inputText = wrapper.find('#input');
    const outputText = wrapper.find('#output');

    expect(inputText.text()).toBe(outputText.text());
  });

  it("'제출'을 1회 누르면, Input에 입력한 값과 아래에 표시된 문자열이 왼쪽으로 1칸씩 회전한다.", async () => {
    const inputText = wrapper.find('#input');
    const outputText = wrapper.find('#output');
    const rotateButton = wrapper.find('#rotate');

    await inputText.setValue('ABLY Externship');
    await rotateButton.trigger('click');

    expect(outputText.text()).toBe('BLY ExternshipA');
  });

  it("'알림'을 누를 때마다 Input에 입력한 값과 '알림' 버튼을 클릭한 횟수가 알림창에 표시된다.", async () => {
    const inputText = wrapper.find('#input');
    const outputText = wrapper.find('#output');
    const rotateButton = wrapper.find('#rotate');
    const modalButton = wrapper.find('#modal');

    await inputText.setValue('ABLY Externship');
    await rotateButton.trigger('click');
    await rotateButton.trigger('click');
    await modalButton.trigger('click');
    await modalButton.trigger('click');
    await modalButton.trigger('click');

    expect(outputText.text()).toBe('LY ExternshipAB');
    expect(wrapper.vm.isModalShown).toBeTruthy();
    expect(wrapper.vm.clicks).toBe(3);
  });
});
