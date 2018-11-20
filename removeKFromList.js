/* 
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
*/

// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}


function removeKFromList(l, k) {
  if (!l) {
    return null;
  } else {
    l.next = removeKFromList(l.next, k);
    return l.value === k ? l.next : l;
  }
}


// function removeKFromList(l, k) {
// 	var node = l,
// 			prevNode = null,
// 			firstNode = null;
// 	while (node) {
// 			if (node.value !== k) {
// 					if (firstNode === null) firstNode = node;
// 					if (prevNode) prevNode.next = node;
// 					prevNode = node;
// 			}
// 			node = node.next;
// 	}
// 	if (prevNode) prevNode.next = null;
// 	return firstNode;
// }
