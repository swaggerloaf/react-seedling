import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const todos = [
  {
    id: 1,
    text: 'Building Applications in React and Flux',
    watchHref:
      'http://www.pluralsight.com/courses/react-flux-building-applications',
    authorId: 'cory-house',
    completed: false,
    category: 'JavaScript'
  },
  {
    id: 2,
    text: 'Clean Code: Writing Code for Humans',
    watchHref: 'http://www.pluralsight.com/courses/writing-clean-code-humans',
    authorId: 'cory-house',
    completed: false,
    category: 'Software Practices'
  },
  {
    id: 3,
    text: 'Architecting Applications for the Real World',
    watchHref:
      'http://www.pluralsight.com/courses/architecting-applications-dotnet',
    authorId: 'cory-house',
    completed: false,
    category: 'Software Architecture'
  },
  {
    id: 4,
    text: 'Becoming an Outlier: Reprogramming the Developer Mind',
    watchHref:
      'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
    authorId: 'cory-house',
    completed: false,
    category: 'Career'
  },
  {
    id: 5,
    text: 'Web Component Fundamentals',
    watchHref: 'http://www.pluralsight.com/courses/web-components-shadow-dom',
    authorId: 'cory-house',
    completed: false,
    category: 'HTML5'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = course => {
  return replaceAll(course.title, ' ', '-');
};

class TodoApi {
  static getAllTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }

  static saveTodo(course) {
    course = Object.assign({}, todo); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTodoTextLength = 1;
        if (todo.text.length < minTodoTextLength) {
          reject(`Text must be at least ${minTodoTextLength} characters.`);
        }

        if (todo.id) {
          const existingCourseIndex = todos.findIndex(a => a.id == todo.id);
          todo.splice(existingCourseIndex, 1, todo);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new todos in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          todo.id = generateId(todo);
          todo.watchHref = `http://www.pluralsight.com/courses/${todo.id}`;
          todos.push(todo);
        }

        resolve(todo);
      }, delay);
    });
  }

  static deleteCourse(todoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = todos.findIndex(todo => {
          todo.id == todoId;
        });
        todos.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TodoApi;
