import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCnae } from "../../store/actions/cnae";

function Cnae(prosp) {
  const dispatch = useDispatch();
  const { listCnae, login } = useSelector((state) => state.cnae);

  useEffect(() => dispatch(getCnae()), [dispatch]);

  console.log("listCnae ", listCnae);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {listCnae.map((item, index) => (
            <div className="py-8 px-4 lg:w-1/3" key={index}>
              <div className="h-full flex items-start bg-white rounded-lg p-8">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-non">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Jul
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    18
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    {item.cna_name}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a className="inline-flex items-center">
                    {/* <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"> */}
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Henry Letham
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cnae;
