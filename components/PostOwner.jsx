import React from "react";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/Natee.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">Natee Wittwawtskul 630610742</span>
      </div>
      <span>ไอ้ห่า ห้อง319 แม่งเจาะห้องทั้งวันเลยเว้ย #เสียงบรรเลงของสว่านที่เชียงใหม่</span>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">100 คน</span>
      </div>
      <hr className="m-0" />
    </div>
  );
}
