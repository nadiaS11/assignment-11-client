import React from "react";
import PropTypes from "prop-types";

const Blog = () => {
  return (
    <div>
      <section className="mt-32 lg:m-40">
        <h1 className="mb-12 text-center font-sans text-5xl font-bold">
          Recent Posts
        </h1>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src="https://images.unsplash.com/photo-1660241588741-d653d53348fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">
                  Data Binding
                </p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  What is One way data binding?
                </p>
                <p className="text-md font-light text-gray-400">
                  One-way data binding means the practice of updating the user
                  interface {"(UI)"} with data from a source such as a database,
                  in a unidirectional manner. This ensures the changes in the
                  data source are automatically updated along with the UI
                  elements that are bound to that data. However, changes made in
                  the UI do not affect data in the database which means that the
                  UI keeps showing the state of the data source. One-way data
                  binding is how you can bind data to HTML elements and they
                  will automatically get updated when the data changes.
                </p>
                <div className="justify-starts mt-4 flex flex-wrap items-center">
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #data
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #binding
                  </div>
                </div>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src="https://images.unsplash.com/photo-1660213372424-deecb106a28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">NPM</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  What is NPM in node.js?
                </p>
                <p className="text-md font-light text-gray-400">
                  NPM means Node Package Manager. it is a package manager for
                  JavaScript and Node.js and used to manage Node.js modules and
                  libraries, making it easier for developers to share and reuse
                  code. With NPM ,you get a command-line interface where you can
                  install, manage, and publish packages. We commonly use NPM to
                  install third-party packages and libraries in our projects,
                  which can include everything from utility functions to entire
                  web frameworks.
                </p>
                <div className="justify-starts mt-4 flex flex-wrap items-center">
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #NPM
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #Node.js
                  </div>
                </div>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src="https://images.unsplash.com/photo-1660227868332-93e0a0a8c67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Database</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  Different between Mongodb database vs mySQL database.
                </p>
                <p className="text-md font-light text-gray-400">
                  MongoDB and MySQL are two different types of
                  databases.MongoDBworks in a No-SQL way as in they are not
                  organized like SQL. In MySQL, the data has to be organized in
                  a proper structural way and has to be labelled accordingly.
                  Which one you choose depends on how messy or organized you
                  want your data to be and what kind of projects you're working
                  on. MongoDB gives you more flexibility than MySQL which is
                  widely used in critical developments related to transactions
                  related platform such as e-commerce.
                </p>
                <div className="justify-starts mt-4 flex flex-wrap items-center">
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #MongoDb
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #MySQL
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
