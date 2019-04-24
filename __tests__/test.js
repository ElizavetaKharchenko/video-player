import { promises as fs } from 'fs';
import path from 'path';
import init from '../src/app';

const getHtml = () => document.documentElement.innerHTML;

beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '__fixtures__/index.html');
  const html = await fs.readFile(pathToHtml, 'utf8');
  document.body.innerHTML = html;

  init();
});

test('start player', () => {
  expect(getHtml()).toMatchSnapshot();
});

test('overlay play button hidden on play', () => {
  const video = document.getElementById('mainVideo');
  video.dispatchEvent(new window.Event('play'));
  expect(getHtml()).toMatchSnapshot();
});

test('overlay play button show on stop', () => {
  const video = document.getElementById('mainVideo');
  video.dispatchEvent(new window.Event('pause'));
  expect(getHtml()).toMatchSnapshot();
});

test('overlay reload button show on end', () => {
  const video = document.getElementById('mainVideo');
  video.dispatchEvent(new window.Event('ended'));
  expect(getHtml()).toMatchSnapshot();
});

test('sound', () => {
  const dynamic = document.getElementById('dynamic');
  dynamic.click();
  expect(getHtml()).toMatchSnapshot();
});
