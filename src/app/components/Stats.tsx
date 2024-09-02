import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Stats = () => {
  return (
    <section>
      <div>
        <div>
          {/* 左 */}
          <div>
            <div>
              <strong>99.9%</strong>
              <span>現役合格率</span>
            </div>
          </div>
          {/* 右 */}
          <div>
            <div>
              <Image src={''} alt=''/>
              <h3>タイトル</h3>
              <p>詳細</p>
              <Link href={''}>
              <span>もっと見る</span>
              <span><FaChevronRight/></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
