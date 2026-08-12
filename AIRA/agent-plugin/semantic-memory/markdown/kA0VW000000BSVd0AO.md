Adra Balancer – 16 or more-Digit Balance Displays Incorrectly After Excel Import
================================================================================

Issue
-----

User imports a 16-digit balance value for an account via Excel. After the import, only the first few digits (e.g., first three digits) are visible in the account and status fields.

Explanation
-----------

*   User imports a 16-digit balance value for an account via Excel.
*   After import, only the first few digits (e.g., first three digits) are visible in the account and status fields.
*   The issue is not caused by Adra, but by how Excel stores large numeric values.
*   The imported value appears as scientific notation (e.g., 1.08E+16) in Excel before import.
*   Microsoft Excel has a known limitation where numeric values exceeding 15 digits are automatically converted into scientific notation. Although Excel may display the full number correctly on the screen, it stores the value internally in scientific notation, which can cause truncation or formatting changes during import.

Solution:
---------

1.  Before importing, open the file in Excel.
2.  Select the cell(s) containing any values displayed in scientific notation (e.g., 1.08E+16) or any number exceeding the 15-character limit.
3.  Format the affected cells as Number (not General or Scientific) to display the full value. Ensure that the values in these cells are saved (copy and paste to another column, sheet, or workbook).
4.  Right-click and choose Format Cells.
5.  Select Text and click OK.
6.  Re-enter or paste the 16-digit value.
7.  Save the file and re-import the corrected file into Adra.
8.  Verify that the balances now display correctly.