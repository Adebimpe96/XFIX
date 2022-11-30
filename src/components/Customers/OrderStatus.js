import { MdArrowBack } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderStatus = () => {
  return (
    <div className="my-5">
      <div className="flex flex-row justify-center">
        <AiOutlineCheckCircle
          fontSize="10em"
          className="fill-green-500 border-2 rounded-full border-green-500"
        />
      </div>
      <div className="flex flex-col justify-center mx-auto text-center py-4">
        <p className="text-3xl font-medium">Success!</p>
        <p className="container text-lg font-normal ">
          Your order has been successfully placed, the artisan will get in touch
          with you as soon as possible
        </p>
      </div>
      <Link
        to="/custdashboard"
        className="container flex flex-row justify-center mx-auto bg-darkBlue text-white text-md-center
        text-decoration-none py-3"
      >
        <button type="button" className="inline-flex">
          <MdArrowBack fontSize="1.5em" className="mx-2" />
          Back to your dashboard
        </button>
      </Link>
    </div>
  );
};

export default OrderStatus;
