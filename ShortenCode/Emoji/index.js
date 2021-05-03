// In this Clash you have to recreate the emoji system of CodinGame.
// For example, if you type this in the chat you get:
// :slight_smile: --> :)
// :disappointed: --> :(
// Input
// An string s
// Output
// The string, with emojis inserted:
// :slight_smile: ---> :)
// :disappointed: ---> :(
// :loud_laugh: ---> XD [not a real chat emoji conversion]
// :open_mouth: ---> :o
// :stuck_out_tongue: ---> :p
// THESE WILL BE THE ONLY EMOJIS COMING IN THE TEST CASES
// Constraints
// Length of s <= 100
// Each word is seprated by a single whitespace
// Example
// Input
// This is SOO easy :loud_laugh:
// Output
// This is SOO easy XD


//Solution
s=readline().split(' ');
for(i=0;i<s.length;i++){if(s[i]==':slight_smile:'){s[i]=':)';}else if(s[i]==':disappointed:'){s[i]=':(';}else if(s[i]==':loud_laugh:'){s[i]='XD';}else if(s[i]==':open_mouth:'){s[i]=':o';}else if(s[i]==':stuck_out_tongue:'){s[i]=':p';}}print(s.join(' '))


//Pass 100% unit tests