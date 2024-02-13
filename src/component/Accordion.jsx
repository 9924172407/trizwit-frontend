import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ data }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {data?.map((item) => (
        <div
          key={item.id}
          id={`accordion-collapse-${item.id}`}
          data-accordion="collapse"
          className="justify-evenly"
        >
          <h2 id={`accordion-heading-${item.id}`}>
            <button
              type="button"
              className="align-middle text-left outline-none focus:outline-none flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-body-${item.id}`}
              aria-expanded={openAccordion === item.id}
              aria-controls={`accordion-body-${item.id}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="inline-flex gap-2">
                <img src={item?.image} className="h-auto w-auto" />
                <span>{item?.subject}</span>
              </div>

              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${
                  openAccordion === item.id ? "rotate-0" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <div
            id={`accordion-body-${item.id}`}
            className={openAccordion === item.id ? "" : "hidden"}
            aria-labelledby={`accordion-heading-${item.id}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item?.class?.map((temp, i) => (
                  <div key={i}>
                    <p>{temp.name}</p>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      subject: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      class: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Accordion;
