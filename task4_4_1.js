  function searchTreeDF(tree, predFn) {
    
    return function searchTreeByFirstChild(node, predFn) {
        node = tree[0];
      if (node.value == predFn) {
        return node;
      } else if (node.children != null) {
        for (i = 0; i < node.children.length; i++) {
          if (node.children[i].value == predFn) {
            return node.children[i];
          } else {
            searchTreeByFirstChild(node.children[i], predFn);
          }
        }
        return null;
      }
      return null;
    }
  }


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