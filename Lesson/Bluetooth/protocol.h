#ifndef  _PROTOCOL_H_
#define  _PROTOCOL_H_
#include  "Arduino.h"

#define START_CODE 0xAA
#define END_CODE   0x55

typedef enum
{
    E_BATTERY = 1,
    E_LED,
    E_BUZZER,
    E_INFO,
    E_ROBOT_CONTROL,
    E_ROBOT_CONTROL_SPEED,
    E_TEMPERATURE,
    E_IR_TRACKING,
    E_ULTRASONIC,
    E_VERSION,
    E_UPGRADE,
}E_CONTOROL_FUNC;

typedef struct
{
    unsigned short int degree;
    unsigned char speed;
}ST_CONTROL_CODE;

typedef struct
{
    byte start_code ;           // 8bit 0xAA
    byte type;
    byte addr;
    byte function;              // 8 bit
    byte *data;        // n bit
    unsigned short int sum;     // check sum
    byte end_code;              // 8bit 0x55
}ST_protocol;
#endif // _PROTOCOL_H_
