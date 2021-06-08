import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsFiles } from "react-icons/bs";

function OverRay({ right }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const walletRef = useRef(null);
  return (
    <div>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, delay, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: "#ee6a27",
              padding: "2px",
              color: "white",
              fontFamily: "Arial, Helvetica, sans-serif",
              borderRadius: 3,
              ...props.style,
            }}
          >
            클립보드에 복사되었습니다
          </div>
        )}
      </Overlay>
      <div
        style={{
          position: "relative",
        }}
      >
        <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
        <CopyToClipboard text={walletRef.current?.textContent}>
          <span
            style={{
              position: "absolute",
              cursor: "pointer",
              right: right,
            }}
            ref={target}
            onClick={() => {
              setTimeout(() => setShow(true), 100);
              setTimeout(() => setShow(false), 700);
            }}
          >
            <BsFiles style={{ height: "0.5em" }} />
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default OverRay;
