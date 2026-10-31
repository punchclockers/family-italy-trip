(function () {
  const fallback = window.TRIP_DATA || { trip: {}, hotels: [], travel: [] };
  window.TRIP_DATA_READY = (async function () {
    const cfg = window.SUPABASE_CONFIG;
    if (!cfg || !window.supabase || !window.supabase.createClient) return fallback;
    try {
      const client = window.supabase.createClient(cfg.url, cfg.key, {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
      });
      const { data, error } = await client
        .from('trip_items')
        .select('*')
        .order('trip_date', { ascending: true })
        .order('sort_order', { ascending: true })
        .order('id', { ascending: true });
      if (error) throw error;
      if (!Array.isArray(data) || !data.length) return fallback;

      const monthDay = iso => {
        if (!iso) return '';
        const [y,m,d] = iso.split('-').map(Number);
        return new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(y,m-1,d)));
      };
      const clock = value => {
        if (!value) return '';
        const [h,m] = value.slice(0,5).split(':').map(Number);
        const suffix = h >= 12 ? 'PM' : 'AM';
        return `${h % 12 || 12}:${String(m).padStart(2,'0')} ${suffix}`;
      };
      const dayId = iso => {
        if (!iso) return '';
        const [y,m,d] = iso.split('-').map(Number);
        return `${m === 1 ? 'jan' : 'dec'}-${String(d).padStart(2,'0')}`;
      };
      const cityName = c => c === 'Venice' ? 'Venice' : c;

      const hotels = data.filter(x => x.item_type === 'hotel').map(x => ({
        city: cityName(x.city || ''),
        stay: `${monthDay(x.trip_date)} → ${monthDay(x.end_date)}`,
        name: x.title,
        address: x.address || '',
        phone: x.phone || '',
        tel: x.phone ? `tel:${x.phone.replace(/[^+\d]/g,'')}` : '',
        note: x.notes || '',
        site: x.website || '#',
        map: x.map_url || '#',
        day: dayId(x.trip_date)
      }));

      const travelTypes = new Set(['flight','train','car','transportation']);
      const travel = data.filter(x => travelTypes.has(x.item_type)).map(x => {
        const times = [clock(x.start_time), clock(x.end_time)].filter(Boolean).join(' → ');
        const details = [];
        if (x.platform) details.push(x.platform);
        if (x.car) details.push(`Car ${x.car}`);
        if (x.seats) details.push(`Seats ${x.seats}`);
        if (x.confirmation) details.push(`Confirmation ${x.confirmation}`);
        if (x.notes) details.push(x.notes);
        return {
          d: monthDay(x.trip_date),
          k: x.item_type === 'transportation' ? 'car' : x.item_type,
          name: x.title,
          route: [x.origin, x.destination].filter(Boolean).join(' → '),
          time: times || x.notes || '',
          meta: details.join(' • '),
          alert: x.alert || '',
          url: x.website || ''
        };
      });

      const remote = {
        trip: fallback.trip || { name:'Natale in Italia', start:'2026-12-23', end:'2027-01-02' },
        hotels: hotels.length ? hotels : fallback.hotels,
        travel: travel.length ? travel : fallback.travel,
        source: 'supabase',
        syncedAt: new Date().toISOString()
      };
      window.TRIP_DATA = remote;
      try { localStorage.setItem('natale-trip-data', JSON.stringify(remote)); } catch (_) {}
      document.dispatchEvent(new CustomEvent('tripdataready', { detail: remote }));
      return remote;
    } catch (err) {
      console.warn('Supabase unavailable; using local trip-data.js fallback.', err);
      return fallback;
    }
  })();
})();
