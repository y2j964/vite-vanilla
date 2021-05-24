import DOMPurify from 'dompurify';

const loadingIndicatorContainer = document.createElement('div');
loadingIndicatorContainer.className = 'loading-indicator flex justify-center items-center';
loadingIndicatorContainer.role = 'status';

const loadingIndicatorTemplate = `
      <span class="sr-only" tabIndex="-1" ref={ref}>
        Loading...
      </span>
      <svg
        class="lds-spinner"
        aria-label="loading"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ background: 'none' }}
      >
        <g transform="rotate(0 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.9166666666666666s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.8333333333333334s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.75s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.6666666666666666s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5833333333333334s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.4166666666666667s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.3333333333333333s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.25s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.16666666666666666s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.08333333333333333s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect
            x="47"
            y="24"
            rx="9.4"
            ry="4.8"
            width="6"
            height="12"
            fill=" #000000"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </svg>
    </div>
`;

const cleanLoadingIndicatorTemplate = DOMPurify.sanitize(
  loadingIndicatorTemplate,
);
loadingIndicatorContainer.innerHTML = cleanLoadingIndicatorTemplate;

const renderLoadingIndicatorInDOM = (targetElSibbling) => {
  targetElSibbling.insertAdjacentElement(
    'beforebegin',
    loadingIndicatorContainer,
  );
};

const removeLoadingIndicatorFromDOM = () => {
  const loadingIndicator = document.querySelector('.loading-indicator');
  loadingIndicator.remove();
};

export { renderLoadingIndicatorInDOM, removeLoadingIndicatorFromDOM };
