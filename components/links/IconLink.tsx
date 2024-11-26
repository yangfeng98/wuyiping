import React, { useState } from "react";
import Image from 'next/image'
const IconLink = ({ defaultIcon, hoverIcon, link, tipText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: "inline-block", textDecoration: "none", position: "relative" }}
    >
      <Image
        src={isHovered ? hoverIcon : defaultIcon}
        alt="icon"
        style={{
          width: 25, // 图标大小
          height: 25,
          transition: "transform 0.3s ease", // 鼠标划过时的动画效果
          transform: isHovered ? "scale(1.1)" : "scale(1)", // 鼠标划过时放大
        }}
      />
      {/* 自定义的提示文字 */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "-30%",
            left: "50%",
            transform: "translate(-50%, -100%)", // 使提示文字位于图标上方
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            whiteSpace: "nowrap", // 防止文字换行
            zIndex: 1,
          }}
        >
          {tipText}
        </div>
      )}
    </a>
  );
};

export default IconLink;