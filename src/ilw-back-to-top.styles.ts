import {css} from 'lit';

export default css`

:host {
  bottom: var(--ilw-back-to-top--bottom);
  position: fixed;
  right: var(--ilw-back-to-top--right);
  z-index: 2;
}
button {
  box-sizing: border-box;
  padding: 4px;
  display: block;
  background-color: var(--ilw-back-to-top--background);
  border: 2px solid var(--ilw-back-to-top--color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  transition: transform .4s;
  cursor: pointer;
}
button:hover {
  background-color: var(--ilw-back-to-top--color);
  border-color: var(--ilw-back-to-top--background);
}
button:focus {
  background-color: var(--ilw-back-to-top--focus-background-color);
  border-color: var(--ilw-back-to-top--focus-color);
  outline: var(--ilw-back-to-top--focus-outline);
}  
button.top-of-page {
  transform: translateY(88px);
}
svg {
  height: 36px;
  width: 36px;
}
path {
  fill: var(--ilw-back-to-top--color);
}
button:hover path, button:focus path {
  fill: var(--ilw-back-to-top--background);
}
`;