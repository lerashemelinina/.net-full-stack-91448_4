﻿/*
ממשק יכול לרשת כמה ממשקים
כל ממשק יהיה מופרד מהקודם ע"י פסיק
=======================
אי אפשר לרשת בממשק ממשק אחר ע"י המילה:
implements
אלא חובה לבצע רק ירושה רגילה ע"י
extends
=====================
כאשר ניצור מחלקה שממשמת את הממשק
IMove
נהיה חייבים לממש את כל הפונקציות המוגדרות בתוך:
IMove, IMoveRight, IMoveLeft
*/

interface IMove extends IMoveRight, IMoveLeft {

    moveBackAction(speed: number): void;

}