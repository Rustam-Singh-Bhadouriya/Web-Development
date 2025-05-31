class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        self.s = s

        # if self.s.startswith('{') and self.s.endswith('}') or self.s.startswith('(') and self.s.endswith(')') or self.s.startswith('[') and self.s.endswith(']'):
        #     # return True
        #     print('true')
         
        if self.s[0] == '{' and self.s[1] == '}' or self.s[0] == '(' and self.s[1] == ')' or self.s[0] == '[' and self.s[1] == ']':
            print('True')
        else:
            # return False
            print('False')
        
c = Solution()
c.isValid('([])')
