/*
====================plan=======================
make two pointers
 - curr point at head
 - prev point at null
while curr exist
    move the next to curr.next
    make curr.next point to prev
    move prev to curr
    move curr to next
when curr not exist anymore
 - means prev is the head of linked list
*/

const reverseList = (head) => {
    let curr = head;
    let prev = null;

    while(curr) {
        let next = curr.next;
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}