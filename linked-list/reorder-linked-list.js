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
     * @return {void}
     */
    reorderList(head) {
        if (!head) return;

        const nodes = [];
        let cur = head;
        while (cur) {
            nodes.push(cur);
            cur = cur.next;
        }

        let i = 0, j = nodes.length - 1;
        while (i < j) {
            nodes[i].next = nodes[j];
            i++;
            if (i >= j) break;
            nodes[j].next = nodes[i];
            j--;
        }

        nodes[i].next = null;
    }
}