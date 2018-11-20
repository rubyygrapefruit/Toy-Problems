function isListPalindrome(list) {
	var slow = null,
		fast = list,
		temp;
	// Find center point and reverse the first half of the list
	while (fast && fast.next) {
		fast = fast.next.next;
		temp = list.next;
		list.next = slow;
		slow = list;
		list = temp;
	}
	// If fast not null, list length is odd, ignore the center value
	if (fast) {
		list = list.next;
	}
	// Find the first difference
	while (list) {
		if (slow.value != list.value) return false;
		slow = slow.next;
		list = list.next;
	}
	// Return true, if no diff
	return true;
}

/* Using recursion O(n) solution and 2 extra variables and lot of stack. */
function isListPalindrome2(l) {
	var r = l,
		ret,
		f = v =>
		r ? (r = r.next, ret = !r || f(r.value) && l.value == v, l = l.next, ret) :
		1;
	return !r || f(r.value);
}

/* The shortest solution. But using internal functions and lot of memory: */
function isListPalindrome3(l) {
	l = JSON.stringify(l).slice(1, -1).split `,`;
	return l + "" == l.reverse();
}

function isListPalindrome(l) {
	if (!l) {
		return true
	}

	var arr = []

	while (l) {
		arr.push(l.value)

		l = l.next
	}

	return (arr.toString() == arr.reverse().toString())
}