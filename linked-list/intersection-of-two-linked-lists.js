/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let lenA = length(headA);
    let lenB = length(headB);
    if (lenA > lenB) {
        headA = move(headA, lenA - lenB);
    } else if (lenA < lenB) {
        headB = move(headB, lenB - lenA);
    }

    while (headA && headB) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};

function length(node) {
    let len = 0;
    while (node) {
        len++;
        node = node.next;
    }
    return len;
}

function move(node, steps) {
    while (steps-- > 0) {
        node = node.next;
    }
    return node;
}

// Helper function to convert an array to a ListNode
function arrayToListNode(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return dummyHead.next;
}

// Example usage with ListNode input
var headA = arrayToListNode([4, 1, 8, 4, 5]);
var headB = arrayToListNode([5, 0, 1, 8, 4, 5]);

// You need to ensure there's an intersection in your test data.
// Example: creating an intersection manually by linking part of the list.

let intersectionNode = headA.next.next; // Node with value 8
let temp = headB;
while (temp.next) {
    temp = temp.next;
}
temp.next = intersectionNode; // Manually creating intersection

console.log(getIntersectionNode(headA, headB)); // Output: ListNode with value 8
