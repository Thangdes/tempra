# 🎨 Kế Hoạch Triển Khai Frontend Chi Tiết - Tempra

**Dự án**: Tempra - Smart Calendar Assistant  
**Ngày tạo**: 2025-10-01  
**Phiên bản**: 1.0.0

---

## 📊 Tổng Quan

### 🎯 Mục Tiêu
Xây dựng ứng dụng Frontend hiện đại cho Tempra Calendar với:
- ✅ Clean Architecture (Atomic Design - đã implement)
- ✅ Type-safe với TypeScript
- ✅ Modern UI/UX với Tailwind CSS
- ✅ State Management hiệu quả
- ✅ Real-time synchronization
- ✅ Mobile-responsive

### 🛠️ Tech Stack Đề Xuất
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand + React Query (TanStack Query)
- **Forms**: React Hook Form + Zod
- **Calendar UI**: FullCalendar hoặc React Big Calendar
- **Real-time**: Socket.io Client
- **Date Handling**: date-fns
- **HTTP Client**: Axios với interceptors
- **Icons**: Lucide React
- **Charts**: Recharts (cho analytics)

---

## 📁 Cấu Trúc Đã Có (Atomic Design)

```
✅ components/
  ✅ atoms/          # Button, Input, Badge, etc.
  ✅ molecules/      # FormField, Cards, etc.
  ✅ organisms/      # Header, Footer, Sections
    ✅ sections/     # Landing page sections (11 components)
  ✅ templates/      # Page layouts
  ✅ ui/             # shadcn/ui components

✅ config/
  ✅ app.config.ts
  ✅ landing-data.config.ts

✅ types/
  ✅ landing.types.ts

❌ CẦN TẠO:
  ❌ lib/           # Services, hooks, utilities
  ❌ stores/        # Zustand stores
  ❌ types/api.types.ts
```

---

## 🎨 DANH SÁCH TRANG CẦN TRIỂN KHAI

### ✅ 1. Landing Page (/)
**Status**: ✅ 90% Hoàn Thành  
**Priority**: Thấp

**Đã Có**: 11 sections đã clean up với Atomic Design  
**Cần Làm**:
- [ ] Responsive optimization
- [ ] Animation với Framer Motion
- [ ] SEO metadata
- [ ] Performance optimization

---

### 🔴 2. Trang Đăng Nhập (/login)
**Priority**: Cao | **Estimate**: 2 ngày

#### **UI Components Cần Tạo**:
```tsx
organisms/LoginForm/
  ├── LoginForm.tsx
  └── index.ts

molecules/SocialLoginButton/
  └── SocialLoginButton.tsx
```

#### **API Endpoints**:
- `POST /api/auth/login`
- `POST /api/auth/google` (OAuth)

#### **Features**:
- [ ] Form validation (email format, password required)
- [ ] Email/password login
- [ ] Google OAuth button
- [ ] "Remember me" checkbox
- [ ] Error messages display
- [ ] Loading state
- [ ] Redirect to dashboard sau khi login
- [ ] Link to Register & Forgot Password

#### **State Management**:
```typescript
// stores/auth.store.ts
interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}
```

---

### 🔴 3. Trang Đăng Ký (/register)
**Priority**: Cao | **Estimate**: 2 ngày

#### **UI Components**:
```tsx
organisms/RegisterForm/
  ├── RegisterForm.tsx
  └── index.ts
```

#### **API Endpoints**:
- `POST /api/auth/register`

#### **Features**:
- [ ] Form với fields: Full Name, Email, Password, Confirm Password
- [ ] Password strength indicator
- [ ] Validation rules:
  - Email format hợp lệ
  - Password min 8 ký tự
  - Password có uppercase + number
  - Confirm password match
- [ ] Terms & Conditions checkbox
- [ ] Error handling
- [ ] Success message → Auto login

---

### 🔴 4. Dashboard Layout (/dashboard)
**Priority**: Cao | **Estimate**: 3 ngày

#### **UI Components Cần Tạo**:
```tsx
organisms/
  ├── DashboardSidebar/
  │   ├── DashboardSidebar.tsx
  │   ├── NavItem.tsx
  │   └── UserProfile.tsx
  │
  ├── DashboardHeader/
  │   ├── DashboardHeader.tsx
  │   ├── SearchBar.tsx
  │   ├── NotificationBell.tsx
  │   └── UserMenu.tsx
  │
  └── DashboardTemplate/
      └── DashboardTemplate.tsx

molecules/
  └── Breadcrumbs/
```

#### **Features**:

**Sidebar**:
- [ ] Logo + App name
- [ ] Navigation menu:
  - 📅 Calendar
  - 📋 Events
  - ⏰ Availability
  - 📆 Bookings
  - 🔗 Integrations
  - ⚙️ Settings
- [ ] Active link highlighting
- [ ] Collapse/expand (desktop)
- [ ] Mobile drawer
- [ ] User profile section

**Header**:
- [ ] Search bar (global)
- [ ] Notifications bell với badge
- [ ] User menu dropdown
- [ ] Breadcrumbs
- [ ] Mobile menu toggle

---

### 🔴 5. Calendar View (/dashboard/calendar)
**Priority**: Cao | **Estimate**: 5 ngày

#### **Library**: `@fullcalendar/react` hoặc `react-big-calendar`

#### **UI Components**:
```tsx
organisms/
  ├── CalendarView/
  │   ├── CalendarView.tsx
  │   ├── CalendarToolbar.tsx
  │   ├── MiniCalendar.tsx
  │   └── EventPopover.tsx
  │
  └── EventModal/
      ├── EventModal.tsx
      ├── EventForm.tsx
      ├── RecurrenceSettings.tsx
      └── EventDetails.tsx

molecules/
  ├── ViewSwitcher/
  ├── DateNavigator/
  ├── EventCard/
  └── TimeSlot/
```

#### **API Endpoints**:
- `GET /api/events` (với date range)
- `GET /api/calendar/recurring/expand` (expand recurring events)
- `POST /api/events` (create)
- `PATCH /api/events/:id` (update)
- `DELETE /api/events/:id` (delete)

#### **Features**:

**Calendar Views**:
- [ ] Month view
- [ ] Week view
- [ ] Day view
- [ ] Agenda/List view
- [ ] View switcher buttons

**Event Display**:
- [ ] Regular events
- [ ] All-day events
- [ ] Recurring events (expanded)
- [ ] Color coding by calendar
- [ ] Time labels
- [ ] Event overlap handling

**Interactions**:
- [ ] Click empty slot → Create event
- [ ] Click event → View details popover
- [ ] Drag & drop to reschedule
- [ ] Resize event to change duration
- [ ] Double click → Edit modal
- [ ] Right click → Context menu

**Navigation**:
- [ ] Previous/Next buttons
- [ ] Today button
- [ ] Date picker
- [ ] Mini calendar (side panel)

**Filters & Search**:
- [ ] Search events by title
- [ ] Filter by calendar
- [ ] Date range picker
- [ ] Clear filters button

**Actions**:
- [ ] Create event button
- [ ] Export calendar (ICS)
- [ ] Print view
- [ ] Share calendar link

---

### 🔴 6. Event Form Modal (Create/Edit)
**Priority**: Cao | **Estimate**: 4 ngày

#### **API Endpoints**:
- `POST /api/events`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

#### **Form Fields**:

**Basic Info**:
- [ ] Title* (required)
- [ ] Description (textarea)
- [ ] Location

**Date & Time**:
- [ ] Start date* (date picker)
- [ ] Start time* (time picker)
- [ ] End date* (date picker)
- [ ] End time* (time picker)
- [ ] All-day event (toggle)
- [ ] Timezone selector

**Recurrence** (RRULE):
- [ ] Repeat dropdown:
  - None
  - Daily
  - Weekly
  - Monthly
  - Yearly
  - Custom
- [ ] Interval (Every X days/weeks/months)
- [ ] Days of week (for weekly)
- [ ] Day of month (for monthly)
- [ ] Ends:
  - Never
  - On date (date picker)
  - After X occurrences
- [ ] RRULE preview text

**Additional**:
- [ ] Calendar selection (if multiple)
- [ ] Color picker
- [ ] Reminders (dropdown)
- [ ] Notes (textarea)

**Validation**:
- [ ] Title required
- [ ] End time after start time
- [ ] Valid date range
- [ ] RRULE validation

**Actions**:
- [ ] Save button
- [ ] Cancel button
- [ ] Delete button (edit mode)
- [ ] Save & add another

---

### 🔴 7. Google Calendar Integration (/dashboard/integrations/google)
**Priority**: Cao | **Estimate**: 4 ngày

#### **API Endpoints**:
```typescript
// Connection
GET  /api/google/auth/url
GET  /api/google/auth/callback
GET  /api/google/status
DELETE /api/google/disconnect

// Sync
POST /api/calendar/sync/initial
GET  /api/calendar/sync/status
POST /api/calendar/sync/toggle
GET  /api/calendar/sync/conflicts
POST /api/calendar/sync/conflicts/:id/resolve

// Webhooks
POST /api/webhook/google/watch
GET  /api/webhook/google/channels
DELETE /api/webhook/google/watch/:channelId
```

#### **UI Sections**:

**1. Connection Status**:
```tsx
<Card>
  {!connected ? (
    <EmptyState>
      <Icon name="google-calendar" />
      <Title>Kết nối Google Calendar</Title>
      <Description>Đồng bộ tự động...</Description>
      <Button>Kết nối ngay</Button>
    </EmptyState>
  ) : (
    <ConnectedState>
      <Avatar src={googleEmail} />
      <Info>
        <Email>{email}</Email>
        <Status>Đã kết nối</Status>
        <LastSync>Lần cuối: 5 phút trước</LastSync>
      </Info>
      <Button variant="danger">Ngắt kết nối</Button>
    </ConnectedState>
  )}
</Card>
```

**2. Initial Sync Flow**:
- [ ] Strategy selection:
  ```tsx
  <RadioGroup>
    <Radio value="google_wins">
      Google thắng - Thay thế events Tempra
    </Radio>
    <Radio value="tempra_wins">
      Tempra thắng - Giữ events Tempra
    </Radio>
    <Radio value="merge">
      Merge - Kết hợp cả hai
    </Radio>
  </RadioGroup>
  ```
- [ ] Progress bar
- [ ] Success summary
- [ ] Error handling

**3. Sync Settings**:
- [ ] Auto-sync toggle
- [ ] Manual sync button
- [ ] Sync direction (one-way/two-way)
- [ ] Calendar selection (multi-select)

**4. Conflict Resolution**:
```tsx
<ConflictsList>
  {conflicts.map(conflict => (
    <ConflictCard>
      <TwoColumnCompare>
        <Column title="Google">
          <EventDetails event={conflict.google_event} />
        </Column>
        <Column title="Tempra">
          <EventDetails event={conflict.tempra_event} />
        </Column>
      </TwoColumnCompare>
      
      <Actions>
        <Button>Keep Google</Button>
        <Button>Keep Tempra</Button>
        <Button>Merge</Button>
      </Actions>
    </ConflictCard>
  ))}
</ConflictsList>
```

**5. Webhook Status** (Real-time):
- [ ] Active channels list
- [ ] Expiration countdown
- [ ] Refresh button
- [ ] Real-time indicator

**6. Sync History**:
- [ ] Table với columns:
  - Time
  - Type (manual/auto)
  - Status
  - Events synced
  - Errors
- [ ] Filter by date
- [ ] View details modal

---

### 🟡 8. Availability Settings (/dashboard/availability)
**Priority**: Trung Bình | **Estimate**: 4 ngày

#### **API Endpoints**:
```typescript
GET    /api/availability
POST   /api/availability
PATCH  /api/availability/:id
DELETE /api/availability/:id

GET    /api/availability/exceptions
POST   /api/availability/exceptions
DELETE /api/availability/exceptions/:id
```

#### **UI Layout**:

**Tab 1: Weekly Schedule**:
```tsx
<WeeklySchedule>
  {daysOfWeek.map(day => (
    <DayRow key={day}>
      <Checkbox label={dayName} />
      <TimeRanges>
        {day.ranges.map(range => (
          <TimeRange>
            <TimePicker value={range.start} />
            <span>đến</span>
            <TimePicker value={range.end} />
            <Button icon="trash" />
          </TimeRange>
        ))}
        <Button icon="plus">Thêm giờ</Button>
      </TimeRanges>
    </DayRow>
  ))}
</WeeklySchedule>

<Actions>
  <Button>Copy to all days</Button>
  <Select placeholder="Apply template">
    <Option>9-5 Weekdays</Option>
    <Option>Flexible</Option>
  </Select>
</Actions>
```

**Tab 2: Date Exceptions**:
- [ ] Calendar view
- [ ] Mark specific dates unavailable
- [ ] Custom time ranges for dates
- [ ] Add reason/note
- [ ] Import holidays

**Tab 3: Settings**:
- [ ] Default timezone
- [ ] Buffer time between meetings (minutes)
- [ ] Minimum advance notice (hours)
- [ ] Maximum bookings per day

**Preview Panel**:
- [ ] Week view của availability
- [ ] Color-coded blocks
- [ ] Conflicts highlighting

---

### 🟡 9. Booking Links (/dashboard/bookings)
**Priority**: Trung Bình | **Estimate**: 3 ngày

#### **API Endpoints**:
```typescript
GET    /api/booking-links
POST   /api/booking-links
PATCH  /api/booking-links/:id
DELETE /api/booking-links/:id
```

#### **UI - Booking Links Table**:
```tsx
<Table>
  <Columns>
    <Col>Tiêu đề</Col>
    <Col>Link</Col>
    <Col>Thời lượng</Col>
    <Col>Đã đặt</Col>
    <Col>Trạng thái</Col>
    <Col>Actions</Col>
  </Columns>
  
  <Row>
    <Cell>{title}</Cell>
    <Cell>
      <CopyLink url={publicUrl} />
    </Cell>
    <Cell>{duration}m</Cell>
    <Cell>{bookingCount}</Cell>
    <Cell>
      <Badge color={isActive ? 'green' : 'gray'}>
        {isActive ? 'Active' : 'Inactive'}
      </Badge>
    </Cell>
    <Cell>
      <Dropdown>
        <Item icon="eye">Preview</Item>
        <Item icon="edit">Edit</Item>
        <Item icon="qr">QR Code</Item>
        <Item icon="trash">Delete</Item>
      </Dropdown>
    </Cell>
  </Row>
</Table>
```

#### **Create/Edit Modal**:
- [ ] Title*
- [ ] Slug* (auto-generate from title)
- [ ] Description
- [ ] Duration (dropdown: 15m, 30m, 45m, 1h, custom)
- [ ] Buffer time (0-60 minutes)
- [ ] Advance notice (hours)
- [ ] Max bookings per day
- [ ] Color picker
- [ ] Active toggle

---

### 🟡 10. Public Booking Page (/booking/[slug])
**Priority**: Trung Bình | **Estimate**: 4 ngày

#### **API Endpoints**:
```typescript
GET  /api/booking-links/:slug
GET  /api/booking-links/:slug/availability
POST /api/bookings
```

#### **UI Flow**:

**Step 1: Select Date & Time**:
```tsx
<BookingPage>
  <Header>
    <Avatar src={owner.avatar} />
    <Name>{owner.name}</Name>
    <Title>{bookingLink.title}</Title>
    <Meta>
      <Icon>clock</Icon>
      <Text>{duration} phút</Text>
    </Meta>
  </Header>
  
  <TwoColumn>
    <CalendarColumn>
      <MonthCalendar
        highlightAvailable={true}
        disablePast={true}
      />
    </CalendarColumn>
    
    <SlotsColumn>
      <SelectedDate>{selectedDate}</SelectedDate>
      <TimezonePicker />
      <SlotsList>
        {slots.map(slot => (
          <SlotButton
            selected={selectedSlot === slot}
            onClick={() => selectSlot(slot)}
          >
            {slot.start_time}
          </SlotButton>
        ))}
      </SlotsList>
    </SlotsColumn>
  </TwoColumn>
</BookingPage>
```

**Step 2: Enter Details**:
```tsx
<Form>
  <Input name="name" label="Họ tên*" />
  <Input name="email" label="Email*" type="email" />
  <Input name="phone" label="Số điện thoại" />
  <Textarea name="notes" label="Ghi chú" />
  
  <Summary>
    <Icon>calendar</Icon>
    <Text>{selectedDateTime}</Text>
    <Text>{duration}m with {owner.name}</Text>
  </Summary>
  
  <Checkbox name="terms">
    Tôi đồng ý với điều khoản
  </Checkbox>
  
  <Button type="submit" size="lg">
    Xác nhận đặt lịch
  </Button>
</Form>
```

**Step 3: Success**:
```tsx
<SuccessPage>
  <Icon name="check-circle" color="green" size="xl" />
  <Title>Đặt lịch thành công!</Title>
  <Description>
    Email xác nhận đã được gửi đến {email}
  </Description>
  
  <BookingDetails>
    <Row>
      <Label>Thời gian</Label>
      <Value>{dateTime}</Value>
    </Row>
    <Row>
      <Label>Với</Label>
      <Value>{owner.name}</Value>
    </Row>
    <Row>
      <Label>Mã xác nhận</Label>
      <Value>{confirmationCode}</Value>
    </Row>
  </BookingDetails>
  
  <Actions>
    <Button icon="google-calendar">
      Add to Google Calendar
    </Button>
    <Button icon="apple">
      Add to Apple Calendar
    </Button>
    <Button icon="download">
      Download ICS
    </Button>
  </Actions>
  
  <Links>
    <Link href={rescheduleUrl}>Đổi lịch</Link>
    <Link href={cancelUrl}>Hủy lịch</Link>
  </Links>
</SuccessPage>
```

---

### 🟡 11. Bookings List (/dashboard/bookings/list)
**Priority**: Trung Bình | **Estimate**: 2 ngày

#### **API Endpoints**:
```typescript
GET    /api/bookings
POST   /api/bookings/:id/cancel
POST   /api/bookings/:id/reschedule
```

#### **Features**:
- [ ] Table view với columns:
  - Booker name
  - Email
  - Date & time
  - Duration
  - Status
  - Booking link
  - Actions
- [ ] Filters:
  - Status (upcoming, past, cancelled)
  - Date range
  - Booking link
- [ ] Search by booker name/email
- [ ] Pagination
- [ ] Export to CSV
- [ ] Bulk actions

---

### 🟢 12. Settings Page (/dashboard/settings)
**Priority**: Thấp | **Estimate**: 3 ngày

#### **Tabs**:

**Profile**:
- [ ] Avatar upload
- [ ] Full name
- [ ] Email (read-only)
- [ ] Phone
- [ ] Bio
- [ ] Timezone
- [ ] Save button

**Account**:
- [ ] Change password form
- [ ] 2FA setup (future)
- [ ] Delete account (với confirmation)

**Notifications**:
- [ ] Email notifications checkboxes:
  - New booking
  - Booking cancelled
  - Event reminder
  - Daily summary
- [ ] Notification time preferences

**Calendar**:
- [ ] Default view
- [ ] Start of week
- [ ] Time format (12h/24h)
- [ ] Date format
- [ ] Default event duration
- [ ] Default reminder

---

## 🔧 LIB & UTILITIES CẦN TẠO

### 1. API Client
```typescript
// lib/api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Add interceptors cho auth & error handling
```

### 2. Custom Hooks
```typescript
// lib/hooks/
- useAuth.ts          // Auth state & methods
- useEvents.ts        // Events CRUD với React Query
- useCalendar.ts      // Calendar view state
- useBookings.ts      // Bookings management
- useGoogleSync.ts    // Google Calendar sync
- useSocket.ts        // WebSocket connection
- useDebounce.ts      // Debounce helper
- useMediaQuery.ts    // Responsive helper
```

### 3. Services
```typescript
// lib/services/
- auth.service.ts      // Login, register, logout
- event.service.ts     // Events API calls
- calendar.service.ts  // Calendar sync
- booking.service.ts   // Bookings API
- socket.service.ts    // WebSocket setup
```

### 4. Stores (Zustand)
```typescript
// lib/stores/
- auth.store.ts       // User & auth state
- calendar.store.ts   // Calendar view state
- event.store.ts      // Selected event, filters
- ui.store.ts         // Modals, sidebars, loading
```

### 5. Utils
```typescript
// lib/utils/
- date.utils.ts       // Date formatting, manipulation
- rrule.utils.ts      // RRULE parsing & generation
- validation.utils.ts // Form validators
- format.utils.ts     // Number, currency, etc.
```

---

## 📋 PRIORITY ROADMAP

### 🚀 Phase 1: Core MVP (4 tuần)
1. ✅ Landing Page polish
2. 🔴 Authentication (Login/Register)
3. 🔴 Dashboard Layout
4. 🔴 Calendar View (basic)
5. 🔴 Event CRUD
6. 🔴 Google Calendar Integration

### 🎯 Phase 2: Booking System (3 tuần)
7. 🟡 Availability Settings
8. 🟡 Booking Links Management
9. 🟡 Public Booking Page
10. 🟡 Bookings List

### 🌟 Phase 3: Polish & Features (2 tuần)
11. 🟢 Settings Page
12. 🟢 Notifications Center
13. 🟢 Search
14. 🟢 Real-time updates (WebSocket)
15. 🟢 Mobile optimization

---

## 📊 ESTIMATE TỔNG

| Phase | Duration | Components | Pages |
|-------|----------|------------|-------|
| Phase 1 | 4 tuần | 25+ | 6 |
| Phase 2 | 3 tuần | 15+ | 4 |
| Phase 3 | 2 tuần | 10+ | 3 |
| **TỔNG** | **9 tuần** | **50+** | **13** |

---

## ✅ CHECKLIST TRƯỚC KHI BẮT ĐẦU

- [ ] Setup Next.js project (đã có)
- [ ] Install dependencies:
  - [ ] `zustand` (state management)
  - [ ] `@tanstack/react-query` (data fetching)
  - [ ] `react-hook-form` (forms)
  - [ ] `zod` (validation)
  - [ ] `axios` (HTTP)
  - [ ] `date-fns` (date utils)
  - [ ] `@fullcalendar/react` (calendar)
  - [ ] `socket.io-client` (real-time)
  - [ ] `lucide-react` (icons)
- [ ] Setup shadcn/ui
- [ ] Configure environment variables
- [ ] Setup API client
- [ ] Create base stores
- [ ] Create auth context/hooks

---

## 📝 GHI CHÚ QUAN TRỌNG

1. **Authentication**: Sử dụng cookie-based auth (đã có backend support)
2. **Real-time Sync**: WebSocket cho Google Calendar webhook notifications
3. **RRULE**: Cần library parse RRULE (rrule.js)
4. **Responsive**: Mobile-first design
5. **Loading States**: Skeleton loaders cho mọi component
6. **Error Handling**: Toast notifications cho errors
7. **Accessibility**: ARIA labels, keyboard navigation
8. **SEO**: Next.js metadata, sitemap
9. **Performance**: Code splitting, lazy loading, image optimization
10. **Testing**: Unit tests (Jest), E2E tests (Playwright)

---

## 🎉 KẾT LUẬN

Document này cung cấp roadmap chi tiết để triển khai Frontend cho Tempra Calendar. Mỗi trang đã được phân tích với:
- ✅ UI components cần thiết
- ✅ API endpoints integration
- ✅ Features list đầy đủ
- ✅ Priority & estimates

Bắt đầu với Phase 1 để có MVP sớm nhất!
