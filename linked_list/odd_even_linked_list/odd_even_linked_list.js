/*
===============plan=======================
make two pointers
    - odd point to odd.next.next
    - even point to even.next.next
    - store the first even to the head of even
when the odd.next = null
    - odd.next = even head
*/



const oddEvenList = (head) => {
    if(head === null)return null;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(odd && odd.next && even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    
    return head;

}