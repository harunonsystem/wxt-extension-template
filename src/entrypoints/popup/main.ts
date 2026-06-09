import { greet } from '@/lib/greet';

const message = document.getElementById('message');
if (message) {
  message.textContent = greet('popup');
}
