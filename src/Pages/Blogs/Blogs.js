import React from 'react';
import blogone from '../../assets/blogimage/React-State-Management.jpg'
import blogtwo from '../../assets/blogimage/prototypal.png'
import blogthree from '../../assets/blogimage/unite-test.jpg'
import blogfour from '../../assets/blogimage/react-vue-angular.jpeg'

const Blogs = () => {
    return (
        <div>
            <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap justify-center">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span class="text-primary mb-2 block text-lg font-semibold">
                                    Our Blogs
                                </span>
                                <h2
                                    class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                    Our Recent News
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px]">
                                <div class="mb-8 overflow-hidden rounded">
                                    <img
                                        src={blogone}
                                        alt="image"
                                        class="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Dec 22, 2022
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            What are the different ways to manage a state in a React application?
                                        </a>
                                    </h3>
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Show Blog Detail</summary>
                                        <p class="text-body-color text-base">
                                            The Four Kinds of React State to Manage.
                                            <li>Local state</li>
                                            <li>Global state</li>
                                            <li>Server state</li>
                                            <li>URL state</li>
                                            <strong>Local (UI) state – Local state is data we manage in one or another component.</strong>
                                            <br />
                                            Local state is most often managed in React using the useState hook.
                                            <br />
                                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                                            <br /> <br />
                                            <strong>Global (UI) state –</strong> Global state is data we manage across multiple components.
                                            <br />
                                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                                            <br /> <br />
                                            <strong>Server state –</strong> Data that comes from an external server that must be integrated with our UI state.
                                            <br />
                                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                                            <br /> <br />
                                            <strong>URL state –</strong> Data that exists on our URLs, including the pathname and query parameters.
                                            <br />
                                            URL state is often missing as a category of state, but it is an important one.
                                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px]">
                                <div class="mb-8 overflow-hidden rounded">
                                    <img
                                        src={blogtwo}
                                        alt="image"
                                        class="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Mar 15, 2022
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            How does prototypical inheritance work?
                                        </a>
                                    </h3>
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Show Blog Detail</summary>
                                        <p class="text-body-color text-base">
                                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                                            <br /> <br />
                                            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.
                                            <br />
                                            While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px]">
                                <div class="mb-8 overflow-hidden rounded">
                                    <img
                                        src={blogthree}
                                        alt="image"
                                        class="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Jan 05, 2022
                                    </span>
                                    <h3>
                                        <a href="javascript:void(0)" class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                                            What is a unit test? Why should we write unit tests?
                                        </a>
                                    </h3>
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Show Blog Detail</summary>
                                        <p class="text-body-color text-base">
                                            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                                            <br /> <br />
                                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                            <br /> <br />
                                            Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-10 max-w-[370px]">
                                <div class="mb-8 overflow-hidden rounded">
                                    <img
                                        src={blogfour}
                                        alt="image"
                                        class="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Jan 05, 2022
                                    </span>
                                    <h3>
                                        <a href="javascript:void(0)" class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                                            React vs. Angular vs. Vue?
                                        </a>
                                    </h3>
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Show Blog Detail</summary>
                                        <p class="text-body-color text-base">
                                            <strong>Angular vs React</strong>
                                            If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
                                            <br /> <br />
                                            React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                                            <br /> <br />
                                            React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                                            <br /> <br />
                                            <strong>React vs Vue</strong>
                                            The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.
                                            <br /> <br />
                                            Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                                            <br /> <br />
                                            Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                                            <br /> <br />
                                            <strong>Angular vs Vue</strong>
                                            In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
                                            <br /> <br />
                                            A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                                            <br /> <br />
                                            It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;