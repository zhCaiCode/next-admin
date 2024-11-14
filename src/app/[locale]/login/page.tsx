"use client";
import { memo } from "react";
import styles from "./page.module.less";
function LoginBox() {
  return <div>loginBox</div>;
}
function Login() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.loginBox}>
        <div className={styles.right}>
          <LoginBox />
        </div>
      </div>
    </div>
  );
}
export default memo(Login);
