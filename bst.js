class Node {
    constructor(val) {
      this.val = val;
      this.left = this.right = null
    }
  }
  class BST {
    constructor() {
      this.root = null;
      this.left = this.right = null;
    }
    
    insert(val) {
      if (!this.root) {
          this.root = new Node(val);
          return;
       }
      function _insert(node) {
        if(val <= node.val) {
          if(!node.left) {
            node.left = new Node(val);
          } else {
             _insert(node.left)
          }  
        } else {
          if (!node.right) {
            node.right = new Node(val);
          } else {
            _insert(node.right)
          }
        }
      }
      _insert(this.root)
    }
    
    contains(val) {
      if(!this.root) return false;
      function _contains(node) {
        if(val === node.val) return true;
        if(val < node.val) {
          if(!node.left) {
            return false
          } else {
            return _contains(node.left)
          }
        } else {
          if (!node.right) {
            return false 
          } else {
            return _contains(node.right)
          }
        } 
      }
      return _contains(this.root)
    }
    
    printInOrder() {
      function _pIO(node) {
        if(node.left) {
          _pIO(node.left)
        }
        console.log(node.val);
        if(node.right) {
          _pIO(node.right)
        }
      }
      _pIO(this.root)
    }
    printPreOrder() {
  //  1. node.val
  //  2. node.left
  //  3. node.right
    }
    printPostOrder() {
  //  1. node.left
  //  2. node.right
  //  3. node.val
    }
    
    getMin(node = null) {
      if(!this.root) return null
      let curNode = node || this.root;
      while(curNode.left) {
        curNode = curNode.left
      }
      return curNode.val
    }
    getMax(node) {
      if(!this.root) return null
      let curNode = node || this.root;
      while(curNode.right) {
        curNode = curNode.right
      }
      return curNode.val
    }
    
    findParent(val) {
      if(val === this.root) return null;
      let currNode = this.root
      while(currNode) {
        if( (currNode.left && currNode.left.val === val) ||
            (currNode.right && currNode.right.val === val)) {
          return currNode
        } else if(val < currNode.val) {
          currNode = currNode.left
        } else {
          currNode = currNode.right;
        }
      }
      return null
    }
    remove(val) {
      const _removeNode = function(n, v) {
        if (!n) return null
        if (v == n.val) {
          // node has no children 
          if (!n.left && !n.right) return null
          // node has no left child 
          if (!n.left) return n.right;
          // node has no right child 
          if (!n.right) return node.left;
          // node has two children 
          var tempNode = n.right;
          while (tempNode.left) {
            tempNode = tempNode.left;
          }
          n.val = tempNode.val;
          n.right = _removeNode(n.right, tempNode.val);
          return n;
        } else if (v < n.val) {
          n.left = _removeNode(n.left, v);
          return n;
        } else {
          n.right = _removeNode(n.right, v);
          return n;
        }
      }
      this.root = _removeNode(this.root, val);
      }
      
  }
  
  
  const bst = new BST()
  bst.insert(50)
  bst.insert(25);
  bst.insert(75);
  bst.insert(-10);
  bst.insert(19);
  bst.insert(30);
  bst.insert(100);
  bst.insert(10);
  
  console.log(bst.contains(10))
  
  // bst
  // console.log('inOrder')
   bst.printInOrder()
  
  // console.log("getMin")
  // console.log(bst.getMin())
  // console.log("getMax")
  // console.log(bst.getMax());
  
  // bst.findParent(100);
  bst.remove(50)
  '*****************************8'
   bst.printInOrder()
  
  bst
  