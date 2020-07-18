// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function (head) {
	let current = head;
	let previous = null;
	let temp = null;

	while (current) {
		temp = current.next;
		current.next = previous;
		previous = current;
		current = temp;
	}

	return previous;
};
