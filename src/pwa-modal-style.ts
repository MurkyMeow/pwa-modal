import { css } from 'lit-element';

export const style = css`
  @keyframes pop-up {
    from {
      transform: scale(0.8);
      opacity: 0.4;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0.2;
    }
  }

  :host {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    padding: 0 20px;
    --wrapper-background: rgba(0, 0, 0, 0.5);
    --full-screenshot-background: rgba(0, 0, 0, 0.8);
    --modal-background: #fff;
    --description-color: #5f6368;
    --photo-size: 65px;
    --screenshot-width: 102px;
    --screenshot-height: 180px;
    /* could be replaced with <slot> */
    --action-color: #1a73e8;
  }

  .screen-cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 0.25s fadein;
    background: var(--wrapper-background);
  }

  button {
    cursor: pointer;
    font: inherit;
    padding: 0;
    border: none;
    background: none;
  }

  .modal {
    position: relative;
    width: 100%;
    max-width: 500px;
    padding: 17px 16px;
    border-radius: 5px;
    background: var(--modal-background);
    box-sizing: border-box;
    animation: 0.3s pop-up;
  }

  .summary {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .photo {
    flex-shrink: 0;
    width: var(--photo-size);
    height: var(--photo-size);
    border-radius: 50%;
    margin-top: 4px;
    margin-right: 28px;
    background: #1a73e8;
  }
  .name {
    font-size: 1.71em;
    margin-bottom: 3px;
  }
  .publisher {
    color: var(--description-color);
    margin-bottom: 5px;
  }

  .limits {
    font-size: .86em;
    color: var(--description-color);
    display: flex;
    align-items: center;
  }
  .limit-age-icon {
    width: 21px;
    height: 16px;
    margin-right: 8px;
  }
  .limit-info-icon {
    width: 10px;
    height: 10px;
    margin-left: 4px;
  }

  .tags {
    display: flex;
    padding-bottom: 7px;
  }
  .tag {
    padding: 7px 15px;
    margin-right: 13px;
    border-radius: 20px;
    border: 1px solid #dadce0;
  }

  .hr {
    margin: 0 0 13px;
    border-width: 0 0 1px;
    border-color: #d6d8dd;
  }

  .description {
    line-height: 19px;
    letter-spacing: -0.03px;
    text-align: center;
    color: var(--description-color);
    margin-bottom: 16px;
  }

  .screenshots {
    overflow-x: scroll;
    display: flex;
    margin-bottom: 30px;
    scrollbar-width: none; /* Firefox */
  }
  .screenshots::-webkit-scrollbar {
    /* chrome based */
    width: 0;
  }
  .screenshot {
    cursor: pointer;
    padding: 0;
    margin-right: 3px;
    border: none;
    background: none;
  }
  .screenshot-img {
    width: var(--screenshot-width);
    height: var(--screenshot-height);
    object-fit: cover;
  }

  .screenshot-full-wrap {
    background: var(--full-screenshot-background);
  }
  .screenshot-full-img {
    max-width: 100vw;
    max-height: 100vh;
  }
  .screenshot-close-btn {
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 1em;
    right: 1em;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    max-width: 130px;
    margin-left: auto;
    margin-right: 24px;
  }
  .action {
    color: var(--action-color);
  }
  .action:hover {
    filter: brightness(1.2);
  }
  .action:active {
    filter: brightness(0.8);
  }
`;
