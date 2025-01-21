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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let nodes = [];
        let current = head;
        while(current) {
            nodes.push(current);
            current = current.next;
        }
        let removeIndex = nodes.length - n;
        if (removeIndex === 0) {
            return head.next;
        }   
        nodes[removeIndex - 1].next = nodes[removeIndex].next;
        return head;
    }
}
