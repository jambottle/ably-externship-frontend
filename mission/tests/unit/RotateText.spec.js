import { mount } from '@vue/test-utils';
import RotateText from '@/components/Home/RotateText.vue';

describe('RotateText.vue', () => {
  const wrapper = mount(RotateText);

  // 1주차 미션 (기본): 간단한 문자열 회전 기능 구현해보기
  it('renders text-type input', () => {
    expect(wrapper.get('input[type="text"]').exists()).toBe(true);
  });

  it('renders submit-type button', () => {
    expect(wrapper.get('button[type="submit"]').exists()).toBe(true);
  });

  it('has paragraph element', () => {
    expect(wrapper.get('[data-test="output"]').exists()).toBe(true);
  });

  it('displays text from text-type input', async () => {
    const testText = 'Hello from test code!';

    await wrapper.get('[data-test="input"]').setValue(testText);

    expect(wrapper.get('[data-test="output"]').text()).toEqual(testText);
  });

  it('rotates text to left one at a time per button click', async () => {
    const testText = 'I am rotating!';
    const resultText = ' am rotating!I'.trim();

    await wrapper.get('[data-test="input"]').setValue(testText);
    await wrapper.get('[data-test="rotate"]').trigger('click');

    expect(wrapper.get('[data-test="output"]').text()).toBe(resultText);
  });

  // 1주차 미션 (심화): 입력된 문자열과 버튼 클릭 횟수를 알림창에 띄우기
  it('shows modal with text and click counter', async () => {
    const testText = 'Text shown on modal!';

    await wrapper.get('[data-test="input"]').setValue(testText);
    await wrapper.get('[data-test="click"]').trigger('click');
    await wrapper.get('[data-test="click"]').trigger('click');

    expect(wrapper.get('div[class="modal-body"]').text()).toContain(testText);
    expect(wrapper.get('div[class="modal-body"]').text()).toContain(2);
  });
});
