const tree = body({}, [
  div({className: "header"}, [
    div({className: "navbar"}, [
      a({href: "#"}, ["Navbar Link 1"]),
      a({href: "#"}, ["Navbar Link 2"]),
    ])
  ]),
  div({className: "content"}, [
    a({href: "#"}, ["Content Link"]),
  ])
])

function predFn({tag}) { 
  return tag == "a"
}



function node(tag, attributes = {}, children = []) {
  return {tag, attributes, children}
}


function searchTreeBF(tree, predFn) {
  return function searchTreeByFirstChild(node, predFn) {
    node = tree[0];
    let ticks = 0;
    let queue = [];
    queue.unshift(node);
    while (queue.length) {
      ticks++;
      let currNode = queue.pop();
      if (currNode.value == predFn) {
        return {node: currNode, ticks};
      } else {
        for (let i = 0; i < currNode.children.length; i++) {
          queue.unshift(currNode.children[i]);
        }
      } 
    } return {node: null, ticks};
  }
}
  
  