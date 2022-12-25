import {  Puff } from "react-loader-spinner";
import { FC } from "react";

const Loading:FC = () => {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black opacity-80">
        <Puff
          visible={true}
          height="180"
          width="1000"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          color="#00D7FF"
        />
      </div>
    );
}
export default Loading;