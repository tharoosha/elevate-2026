Matcher Regular Expressions
===========================

What RegEx Is and How Matcher Uses RegEx
----------------------------------------

Regular Expressions, also known as Reg-Ex, is a language that allows a search pattern to be defined. These search patterns are meant to assist with searching to match more complex transactions or import file names within Matcher. When properly set up, the use of Reg-Ex will increase the match rate or identify and import the file. 

To learn more about Matcher specific use of RegEx, view [Matcher Basic RegEx Handout.pdf](https://success.adra.com/s/share-playlist?vtui__p=63op1%2FfCTjgNDgTL3ud94NABtgMGriVH6wWSTq%2BPaGxSBXwfubLM3FtZDVI65%2BnZK%2BlWlJmMXGYhTkkwhHh%2BjPR8oziJh%2FzwIsNQCdMCqc8J50I7oDpD7g6akrc7DQjXfCHwZyD%2BhSMTF0FyD0TpcN2kKRiqtt1G2alqSiVp08kqL055Ifneux9cMJFkCbGs&iospref=web)

Note that both the PDF and this article center around Matcher rules, but the same concepts and resources can be applied to file name identification for automatic imports.

Common Regular Expressions
--------------------------

Below is a listing of just some of the common Regular Expressions that can be used to modify Matching Rules in Adra **Matcher**. There are many different expressions that can be used, so running various combinations is recommended until users achieve the desired matching results.   
![image](https://static.adra.com/adra-assistant/images/c0d91172ddadaaee9d7adf624f49b36d.jpg)

 **HELPFUL HINT**: To increase the Match Rate, focus on loading transactions that have unique identifiers that can be matched against. For example, include check numbers for transactions on both the bank and ledger files. Users gain efficiencies in matching automation if they increase the number and quality of unique account attributes loaded into Matcher.

  
Adding RegEx to Matching Rules
---------------------------------

Navigate to **Matcher>Administration>Matching Rules**

1.  Select the third option, **Match on date, amount, fields using RegEX (Advanced)**, under the **Field Matching** section. Note, that the screen will show Regex without parenthesis, but parenthesis must be used to tell RegEx what to find. 
    

![image.png](https://static.adra.com/adra-assistant/images/e56e9651528d3a84ae55ac86f4b823b7.jpg)

2.  In the **Field** drop-down, select the column from the load files that contains the attribute that needs to match the transactions.
    
3.  Use Backspace to clear the text in the **RegEx**, field and enter the expression.
    

Example 1: Parenthetical Expressions
------------------------------------

     
![User-added image](https://static.adra.com/adra-assistant/images/4114329a17f9eaa857d18dd0454ff068.png)  
          
  
The image on the left is from the ledger file and the image on the right is from the bank file of transactional data into **Matcher**. The parenthetical expression above is telling Adra to match the date and amount when it can match ledger transactions with **Reimbursement** to bank transactions to **BAMBORA**.  
  
When placing text between parentheses, Adra **Matcher** will parse lines of text searching for an exact match of the parenthetical expression.

Example 2: Parenthetical expression + **^** token
-------------------------------------------------

  
![User-added image](https://static.adra.com/adra-assistant/images/2158d845b00ad5c83449bcb8e35ada31.png)  
   

 **HELPFUL HINT**: There’s typically more than one way to express a rule that can effectively match transactions. Depending on the varied nature of the imported data, rules may need to have a narrowed scope to appropriately target the correct transactions.

In the above example, the RegEx in the Matching Rule told **Matcher** to identify the word **WIRE** in all capital letters at the start of a line in the mapped **Text** field for line items from the ledger file. The second expression is searching the lines of text from the bank file looking for **WT** at the start of the line.  
  
Remember, RegEx is case-sensitive.  

 **BEST PRACTICE**: RegEx creation sites help can be found at:

*   [https://regex101.com/](https://regex101.com/)  **Copy and paste test data strings into the site and then test out expressions against the test data string.**
*   [https://regexr.com/](https://regexr.com/) **Similar functionality to the above site.**

Related Articles
----------------

*   [Matcher Use Cases for Match Rules](#article:kA00H000000kJBESA2@Success-Center)
*   [Matcher Automatic Import Configurations](#article:kA06S000001Q79aSAC@Success-Center)[](#article:kA00H000000kJBOSA2@Success-Center)