import React from 'react';

const Blogs = () => {
    return (
               <div className='container mt-5'>
                    <h1 className="text-center">Frequently Asked Any Question</h1>
                    <p className="text-center">Write the correct answer to the question</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            When should you use context API?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            we should use the Context API in React when we have data that needs to be shared across multiple components at different levels in our component tree or when we want to avoid prop drilling.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is a custom hook?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            A custom hook is a reusable function in React that contains some logic and can be shared across different components. It allows you to extract and reuse stateful logic from a component and make it more modular and reusable.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is useRef?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            useRef is a hook in React that allows you to create a mutable reference that persists across re-renders of a component. It can be used to access DOM elements, store mutable values, and manage focus and text selection.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is useMemo?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            useMemo is a hook in React that allows you to memoize a value or a function so that it is only recomputed when its dependencies change. It can be used to optimize expensive computations and improve the performance of your application.
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
    );
};

export default Blogs;