/*
================plan==================
make two pointer
slow point at head
fast point at head.next.next
slow move forward one index / time
fast move forward two index / time
when fast.next = null or fast.next.next = null
    - slow.next = slow.next.next
*/

const deleteMiddle = (head) => {
    if(head.next === null) return null;

    let slow = head;
    let fast = head.next.next;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next

    return head;
}