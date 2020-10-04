function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
  }

function findOrAdd(rootNode, node){
    if (rootNode.data === node.data){
        return true
        // if the new node is < root node
    } else if (rootNode.data > node.data ){
        // if the root node had a node to it's left( < ), recursively run through this function
        if(!!rootNode.left){
            return findOrAdd(rootNode.left, node)
            // if it doesn't have a node to it's left, assign the new node to the left
        } else {
            rootNode.left = node
        }
        // else, the new node is > the the rootNode and needs to go to the right
    } else {
        // if there is already a node assigned to the right
        if(!!rootNode.right){
            // recursively run through the function
            return findOrAdd(rootNode.right, node)
        } else {
            // else, assign the new node to the right
            rootNode.right = node
        }
    }
}

// the below functions are pretty simple since this tree is sorted with every value < the rootNode to the left, and every value > the rootNode to the right

function max(rootNode){
    // so if there is a value to the right we know it is > the rootNode
    if (!!rootNode.right){
        // recursive
        return max(rootNode.right)
    } else {
        // if there is no value to the right, we know we are at the greatest value, so return it
        return rootNode
    }
}

// the opposite is true for min
function min(rootNode){
    if(!!rootNode.left){
        return min(rootNode.left)
    } else {
        return rootNode
    }
}