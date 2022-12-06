import Notiflix from "notiflix";
import { Dna } from "react-loader-spinner";
import { FC } from "react";

const Loader:FC = () => {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black opacity-80">
        <Dna
          visible={true}
          height="180"
          width="1000"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
}
export default Loader;