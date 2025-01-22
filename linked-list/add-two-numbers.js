/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;

        let carry = 0;
        while (l1 || l2 || carry) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;

            let val = v1 + v2 + carry;
            carry = Math.floor(val / 10);
            val = val % 10;
            cur.next = new ListNode(val);

            cur = cur.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}